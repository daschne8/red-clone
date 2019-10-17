let faker = require('faker')

const u1 = "Daschne8"
const u2 = "LongJohn"
const u3 = faker.name.findName()
const u4 = faker.name.findName()

export const seedPosts = [
  {id: "post-1", user: u1, title: faker.lorem.sentence(), content: faker.lorem.paragraph()},
  {id: "post-2", user: u2, title: faker.lorem.sentence(), content: faker.lorem.paragraph()},
  {id: "post-3", user: u1, title: faker.lorem.sentence(), content: faker.lorem.paragraph()},
  {id: "post-4", user: u3, title: faker.lorem.sentence(), content: faker.lorem.paragraph()},
  {id: "post-5", user: u4, title: faker.lorem.sentence(), content: faker.lorem.paragraph()},
  ]

export const seedComments = [
  {id: "comment-1", commented_on: "post-2", user: u1, content: faker.lorem.paragraph()},
  {id: "comment-2", commented_on: "post-1", user: u2, content: faker.lorem.paragraph()},
  {id: "comment-3", commented_on: "post-3", user: u3, content: faker.lorem.paragraph()},
  {id: "comment-4", commented_on: "post-4", user: u4, content: faker.lorem.paragraph()},
  {id: "comment-5", commented_on: "post-5", user: u1, content: faker.lorem.paragraph()},
  {id: "comment-6", commented_on: "comment-1", user: u2, content: faker.lorem.paragraph()},
  {id: "comment-7", commented_on: "comment-6", user: u3, content: faker.lorem.paragraph()},
  {id: "comment-8", commented_on: "comment-5", user: u4, content: faker.lorem.paragraph()},
  {id: "comment-9", commented_on: "comment-7", user: u4, content: faker.lorem.paragraph()},
  {id: "comment-10", commented_on: "post-1", user: u4, content: faker.lorem.paragraph()},
  {id: "comment-11", commented_on: "comment-6", user: u1, content: faker.lorem.paragraph()}

]
