const listHelper = require('../utils/list_helper');

test('dummy returns one', () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});


const listWithManyBlogs = [
  {
    _id: '5a400aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful1',
    author: 'Edsger W. Dijkstra1',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 999,
    __v: 0
  },
  {
    _id: '5a422aa71b54a6732324d17f8',
    title: 'Go To Statement Considered Harmful2',
    author: 'Edsger W. Dijkstra2',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 1,
    __v: 0
  },
  {
    _id: '5a422aa71b54a6123214d17f8',
    title: 'Go To Statement Considered Harmful3',
    author: 'Edsger W. Dijkstra3',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 3,
    __v: 0
  },
];

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful0',
    author: 'Edsger W. Dijkstra0',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
];


const listWithManyBloggers = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 1,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 2,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Very Harmful',
    author: 'Robert C. Martin',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Very Harmful',
    author: 'Robert C. Martin',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 10,
    __v: 0
  },{
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Very Harmful',
    author: 'Robert C. Martin',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 2,
    __v: 0
  },
];
describe('totalLikes', () => {
  test('when list has one blog, total likes = likes of that blog', () => {
    expect(listHelper.totalLikes(listWithOneBlog)).toBe(5);
  });
  test('of empty list is zero', () => {
    expect(listHelper.totalLikes([])).toBe(0);
  });
  test('of a bigger list is correct', () => {
    expect(listHelper.totalLikes(listWithManyBlogs)).toBe(1003);
  });
});

describe('most favorite blog', () => {
  test('of list with one blog, should be that blog', () => {
    expect(listHelper.favoriteBlog(listWithOneBlog)).toEqual(listWithOneBlog[0]);
  });
  test('of list with many blogs should be the correct blog', () => {
    expect(listHelper.favoriteBlog(listWithManyBlogs)).toEqual(listWithManyBlogs[0]);
  });
  // test('of list with no blog', () => {
  //   expect(listHelper.favoriteBlog([])).toEqual(listWithOneBlog[0]);
  // });
});

describe('most blogs out of a blogger', () => {
  test('of list 2 bloggers', () => {
    expect(listHelper.mostBlogs(listWithManyBloggers)).toEqual({
      author: 'Robert C. Martin',
      blogs: 3
    });
  });
});