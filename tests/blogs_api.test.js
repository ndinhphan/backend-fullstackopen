const app = require('../app');
const supertest = require('supertest');
const mongoose = require('mongoose');
const Blog = require('../models/blog');
const api = supertest(app);


const initialBlogs = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 1,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f9',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 2,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f1',
    title: 'Go To Statement Considered Very Harmful',
    author: 'Robert C. Martin',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f2',
    title: 'Go To Statement Considered Very Harmful',
    author: 'Robert C. Martin',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 10,
    __v: 0
  },{
    _id: '5a422aa71b54a676234d17f5',
    title: 'Go To Statement Considered Very Harmful',
    author: 'Robert C. Martin',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 2,
    __v: 0
  },
];

beforeEach(async () => {
  await Blog.deleteMany({});
  for (let blog of initialBlogs){
    let newBlog = new Blog(blog);
    await newBlog.save();
  }
});

test('blogs are returned as json a correct amount',async () => {
  const response = await api.get('/api/blogs');
  expect(response.body).toHaveLength(initialBlogs.length);

});

test('blog can be created, total blog +1, content of blog added', async () => {
  const newBlog = {
    title: 'new test blog yo',
    author: 'me',
    url: 'http://www.u.arizona.edu/',
  };

  await api.post('/api/blogs').send(newBlog).expect(201).expect('Content-Type', /application\/json/);

  const response = await api.get('/api/blogs');
  const titles = response.body.map(r => r.title);
  expect(response.body).toHaveLength(initialBlogs.length+1);
  expect(titles).toContain(newBlog.title);
});


test('blogs id_ are returned id instead',async () => {
  const blog = {
    _id: '5a333aa71b54a676234d17f8',
    title: 'new test blog yo',
    author: 'me',
    url: 'http://www.u.arizona.edu/',
  };
  let newBlog = new Blog(blog);
  await newBlog.save();

  const response = await api.get('/api/blogs');
  // const ids = response.body.map(r => r.id);
  expect(response.body).toHaveLength(initialBlogs.length+1);
  expect(response.body[0].id).toBeDefined;

  // expect(ids).toContain(newBlog._id);

});


afterAll(() => {
  mongoose.connection.close();
});
