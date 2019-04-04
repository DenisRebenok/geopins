const user = {
  _id: '1',
  name: 'Den',
  email: 'denrebenok@gmail.com',
  picture: 'https://cloudinary.com/asdf'
};

module.exports = {
  Query: {
    me: () => user
  }
};
