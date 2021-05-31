
import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default function onFetchError() {
    info({
      text: 'Not a valid name! Please change language to English or enter more spefic request.',
    });
  }