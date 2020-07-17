---
tags: [Notebooks/Google_Sheets/Libraries/Product_ImporterV2]
title: WP_Import-Data
created: '2019-10-21T08:57:44.606Z'
modified: '2019-10-27T02:52:29.252Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)

## WP_Import-Data

```js
/** ----------------------------------------------------------------------------
* Header Colors
*/
var COLOR = {
  green:  '#a3ffcd',
  orange: '#ffc000',
  purple: '#e5dfec',
  red:    '#e36c09',
  yellow: '#ffff00'
};

Object.freeze( COLOR );

/** ----------------------------------------------------------------------------
* My Columns
*/
var COL = {
  A:  1,
  B:  2,
  C:  3,
  D:  4,
  E:  5,
  F:  6,
  G:  7,
  H:  8,
  I:  9,
  J:  10,
  K:  11,
  L:  12,
  M:  13,
  N:  14,
  O:  15,
  P:  16,
  Q:  17,
  R:  18,
  S:  19,
  T:  20,
  U:  21,
  V:  22,
  W:  23,
  X:  24,
  Y:  25,
  Z:  26,
  AA: 27,
  AB: 28,
  AC: 29,
  AD: 30,
  AE: 31,
  AF: 32,
  AG: 33,
  AH: 34,
  AI: 35,
  AJ: 36,
  AK: 37,
  AL: 38,
  AM: 39,
  AN: 40,
  AO: 41,
  AP: 42,
  AQ: 43,
  AR: 44,
  AS: 45,
};

Object.freeze( COL );

/** ----------------------------------------------------------------------------
* Header Titles
*/
function my_getHeaderTitles() {
  
  var headerTitles = [
    'Course Title',
    'Course Category',
    'Course Tag',
    'Course Content',
    'Course Featured Image',
    'Course Status (Publish/Draft)',
    'Lesson Title',
    'Lesson Category',
    'Lesson Tag',
    'Lesson Content',
    'Enable Video Progresson(Y/N)',
    'Video Lesson URL',
    'Auto start Video (Y/N)',
    'Show video Control(Y/N)',
    'When To show(After/Before)',
    'Auto Complete Lesson (Y/N)',
    'Hide Complete Button (Y/N)',
    'Allow Comment (Y/N)',
    'Lesson Order',
    'Lesson Featured Image',
    'Lesson Status (Publish/Draft)',
    'Topic Title',
    'Topic Category',
    'Topic Tag',
    'Topic Content',
    'Enable Video Progresson(Y/N)',
    'Video Lesson URL',
    'Auto start Video (Y/N)',
    'Show video Control(Y/N)',
    'When To show(After/Before)',
    'Auto Complete Lesson (Y/N)',
    'Hide Complete Button (Y/N)',
    'Allow Comment (Y/N)',
    'Topic Order',
    'Topic Featured Image',
    'Topic Status (Publish/Draft)'
  ];
  
  return headerTitles;
}

```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)
