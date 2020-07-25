import CMS from 'netlify-cms-app';
import PostPreview from './preview/postPreview';

import withEmotion from './withEmotion';

CMS.registerPreviewTemplate('blog', withEmotion(PostPreview));
CMS.registerPreviewTemplate('notes', withEmotion(PostPreview));
