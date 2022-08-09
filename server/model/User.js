const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  picture: {
    url: String,
    publicId: String,
  },
  bio: { type: String, default: '' },
  location: { type: String, default: '' },
  joinDate: {
    type: String,
    default: new Date().toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
    }),
  },
  education: { type: String, default: '' },
  work: { type: String, default: '' },
  availableFor: { type: String, default: '' },
  skills: { type: String, default: '' },
  posts: [{ type: mongoose.Types.ObjectId, ref: 'Post' }],
  comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
  /*
  following: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  followers: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  followedTags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
  bookmarks: [{ type: mongoose.Types.ObjectId, ref: 'Post' }],
  */
  refreshToken: { type: String, default: '' },
});

module.exports = mongoose.model('User', UserSchema);
