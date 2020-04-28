---
tags: [Notebooks/Google_Sheets/Libraries/Product_ImporterV2]
title: WP_Import-Init
created: '2019-10-21T09:52:49.914Z'
modified: '2019-10-27T02:52:26.658Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)

## WP_Import-Init

``` js
/** ----------------------------------------------------------------------------
 * WP Import Menu
 */
function my_importMenu() {
  SpreadsheetApp.getUi()
    .createMenu( 'Import WP' )
    .addItem( 'Generate Lesson Sheet', 'my_generateLessonSheet' )
    .addItem( 'Generate Module Sheet', 'my_generateModuleSheet' )
    .addToUi();
}

/** ----------------------------------------------------------------------------
 * Lesson
 */
function my_generateLessonSheet() {

  var OutputSheet = new My_Sheet( 'Import - Lesson' );
  OutputSheet.insert();
  OutputSheet.colorHeaderRow();

  var Column = new My_Column(
    COL,
    new My_Sheet( 'Content' ),
    OutputSheet
  );

  // Course
  Column.courseTitle( COL.A );
  Column.courseStatus( COL.F );

  // Lesson
  Column.lessonTitle( COL.H );
  Column.lessonEnableVideoProgression( COL.L );
  Column.lessonAutostartVideo( COL.N );
  Column.lessonShowVideoControl( COL.O );
  Column.lessonWhenToShow( COL.P );
  Column.lessonAutoCompleteLesson( COL.Q );
  Column.lessonHideCompleteButton( COL.R );
  Column.lessonAllowComment( COL.S );
  Column.lessonOrder( COL.G );
  Column.lessonStatus( COL.U );

  // Topic
  Column.topicTitle( COL.Y );
  Column.topicContent( COL.AS );
  Column.topicEnableVideoProgression( COL.AD );
  Column.topicAutostartVideo( COL.A );
  Column.topicShowVideoControl( COL.AG );
  Column.topicWhenToShow( COL.AH );
  Column.topicAutoCompleteLesson( COL.AI );
  Column.topicHideCompleteButton( COL.AJF );
  Column.topicAllowComment( COL.AK );
  Column.topicOrder( COL.X );
  Column.topicStatus( COL.AN );

  OutputSheet.removeEmptyRows();
  OutputSheet.autoResizeColumns();
}

/** ----------------------------------------------------------------------------
 * Module
 */
function my_generateModuleSheet() {

  var OutputSheet = new My_Sheet( 'Import - Module' );
  OutputSheet.insert();
  OutputSheet.colorHeaderRow();

  var Column = new My_Column(
    COL,
    new My_Sheet( 'Content' ),
    OutputSheet
  );

  // Course
  Column.courseTitle( COL.H );
  Column.courseStatus( COL.F );

  // Lesson
  Column.lessonTitle( COL.Y );
  Column.lessonContent( COL.AS );
  Column.lessonEnableVideoProgression( COL.L );
  Column.lessonAutostartVideo( COL.N );
  Column.lessonShowVideoControl( COL.O );
  Column.lessonWhenToShow( COL.P );
  Column.lessonAutoCompleteLesson( COL.Q );
  Column.lessonHideCompleteButton( COL.R );
  Column.lessonAllowComment( COL.S );
  Column.lessonOrder( COL.X );
  Column.lessonStatus( COL.U );

  OutputSheet.removeEmptyRows();
  OutputSheet.autoResizeColumns();
}

```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)
