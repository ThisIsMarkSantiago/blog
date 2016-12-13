'use strict';

import mongoose from 'mongoose';

var PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  previewImage: String,
  previewText: {
    type: String,
    required: true
  },
  markup: {
    type: String,
    required: true
  },
  style: String,
  script: String,
  active: Boolean
});

export default mongoose.model('Post', PostSchema);
