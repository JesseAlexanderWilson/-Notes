---
tags: [Notebooks/Google_Sheets/Libraries/Product_ImporterV2]
title: WP_Import-My_Column
created: '2019-10-21T09:52:49.914Z'
modified: '2019-10-27T02:52:22.911Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)

## WP_Import-My_Column

``` js
/** ============================================================================
* Column
*/
function My_Column( Col, InputSheet, OutputSheet ) {
  
  // ===========================================================================
  // Fields  
  // ===========================================================================
  
  this.col         = Col;
  this.inputSheet  = InputSheet.read();
  this.bodyRows    = InputSheet.bodyRows();
  this.outputSheet = OutputSheet.read();

  this.numColumns   = 1;
  this.firstBodyRow = 2;
  
  // ===========================================================================
  // Methods
  // ===========================================================================
  
  /** --------------------------------------------------------------------------
  * Course Title
  * Col A or 1
  */
  this.courseTitle = function ( inputColumn ) {
    var range         = this.inputSheet.getRange( this.firstBodyRow, inputColumn, this.bodyRows, this.numColumns );
    var contentValues = range.getValues();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.A, this.bodyRows, this.numColumns )
    .setValues( contentValues );
  }
  
  /** --------------------------------------------------------------------------
  * Course Category
  * Col B or 2
  */
  this.courseCategory = function () {}
  
  /** --------------------------------------------------------------------------
  * Course Tag
  * Col C or 3
  */
  this.courseTag = function () {}
  
  /** --------------------------------------------------------------------------
  * Course Content
  * Col D or 4
  */
  this.courseContent = function () {}
  
  /** --------------------------------------------------------------------------
  * Course Featured Image
  * Col E or 5
  */
  this.courseFeaturedImage = function () {}
  
  /** --------------------------------------------------------------------------
  * Course Status
  * Col F or 6
  */
  this.courseStatus = function ( inputColumn ) {
    var range         = this.inputSheet.getRange( this.firstBodyRow, inputColumn, this.bodyRows, this.numColumns );
    var contentValues = range.getValues();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.F, this.bodyRows, this.numColumns )
    .setValues( contentValues );
  }
  
  /** --------------------------------------------------------------------------
  * Lesson Title
  * Col G or 7
  */
  this.lessonTitle = function ( inputColumn ) {
    var range         = this.inputSheet.getRange( this.firstBodyRow, inputColumn, this.bodyRows, this.numColumns );
    var contentValues = range.getValues();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.G, this.bodyRows, this.numColumns )
    .setValues( contentValues );
  }
  
  /** --------------------------------------------------------------------------
  * Lesson Category
  * Col H or 8
  */
  this.lessonCategory = function () {}
  
  /** --------------------------------------------------------------------------
  * Lesson Tag
  * Col I or 9
  */
  this.lessonTag = function () {}
  
  /** --------------------------------------------------------------------------
  * Lesson Content
  * Col J or 10
  */
  this.lessonContent = function ( inputColumn ) {
    var range         = this.inputSheet.getRange( this.firstBodyRow, inputColumn, this.bodyRows, this.numColumns );
    var contentValues = range.getValues();
    var code = ''
    + '<!-- wp:core-embed/vimeo {"url":"https://vimeo.com/123456789","type":"video","providerNameSlug":"vimeo","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\n'
    + '<figure class="wp-block-embed-vimeo wp-block-embed is-type-video is-provider-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\n'
    + 'https://vimeo.com/123456789\n'
    + '</div></figure>\n'
    + '<!-- /wp:core-embed/vimeo -->';

    for each( var value in contentValues ) {
      value[0] = code.replace(/123456789/g, value[0] );
    }

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.J, this.bodyRows, this.numColumns )
    .setValues( contentValues );
  }
  
  /** --------------------------------------------------------------------------
  * Lesson Enable Video Progression
  * Col K or 11
  */
  this.lessonEnableVideoProgression = function ( inputColumn ) {
    var lastRow = this.outputSheet.getLastRow();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.K, 1, this.numColumns )
    .setFormula( '=ARRAYFORMULA(IF(Content!L2:L' + lastRow + ' = TRUE, "Y", "N"))' );
  }
  
  /** --------------------------------------------------------------------------
  * Lesson Video Lesson URL
  * Col L or 12
  */
  this.lessonVideoLessonUrl = function () {}
  
  /** --------------------------------------------------------------------------
  * Lesson Autostart Video
  * Col M or 13
  */
  this.lessonAutostartVideo = function ( inputColumn ) {
    var lastRow = this.outputSheet.getLastRow();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.M, 1, this.numColumns )
    .setFormula( '=ARRAYFORMULA(IF(Content!M2:M' + lastRow + ' = TRUE, "Y", "N"))' );
  }
  
  /** --------------------------------------------------------------------------
  * Lesson Show Video Control
  * Col N or 14
  */
  this.lessonShowVideoControl = function (inputColumn, outputColumn ) {
    var lastRow = this.outputSheet.getLastRow();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.N, 1, this.numColumns )
    .setFormula( '=ARRAYFORMULA(IF(Content!N2:N' + lastRow + ' = TRUE, "Y", "N"))' );
  }
  
  /** --------------------------------------------------------------------------
  * Lesson When To Show
  * Col O or 15
  */
  this.lessonWhenToShow = function ( inputColumn ) {
    var range         = this.inputSheet.getRange( this.firstBodyRow, inputColumn, this.bodyRows, this.numColumns );
    var contentValues = range.getValues();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.O, this.bodyRows, this.numColumns )
    .setValues( contentValues );
  }
  
  /** --------------------------------------------------------------------------
  * Lesson Auto Complete Lesson
  * Col P or 16
  */
  this.lessonAutoCompleteLesson = function ( inputColumn ) {
    var lastRow = this.outputSheet.getLastRow();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.P, 1, this.numColumns )
    .setFormula( '=ARRAYFORMULA(IF(Content!Q2:Q' + lastRow + ' = TRUE, "Y", "N"))' );
  }
  
  /** --------------------------------------------------------------------------
  * Lesson Hide Complete Button
  * Col Q or 17
  */
  this.lessonHideCompleteButton = function ( inputColumn ) {
    var lastRow = this.outputSheet.getLastRow();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.Q, 1, this.numColumns )
    .setFormula( '=ARRAYFORMULA(IF(Content!R2:R' + lastRow + ' = TRUE, "Y", "N"))' );
  }
  
  /** --------------------------------------------------------------------------
  * Lesson Allow Comment
  * Col R or 18
  */
  this.lessonAllowComment = function ( inputColumn ) {
    var lastRow = this.outputSheet.getLastRow();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.R, 1, this.numColumns )
    .setFormula( '=ARRAYFORMULA(IF(Content!S2:S' + lastRow + ' = TRUE, "Y", "N"))' );
  }
  
  /** --------------------------------------------------------------------------
  * Lesson Order
  * Col S or 19
  */
  this.lessonOrder = function ( inputColumn ) {
    var range         = this.inputSheet.getRange( this.firstBodyRow, inputColumn, this.bodyRows, this.numColumns );
    var contentValues = range.getValues();

    var subStringValues = contentValues.map(
      function(element) {
        return element.map(
          function(e) {
            return Number(String(e).substring(1, 3));
          }
        )
      }
    );

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.S, this.bodyRows, this.numColumns )
    .setValues( subStringValues );
  }
  
  /** --------------------------------------------------------------------------
  * Lesson Featured Image
  * Col T or 20
  */
  this.lessonFeaturedImage = function () {}
  
  /** --------------------------------------------------------------------------
  * Lesson Status
  * Col U or 21
  */
  this.lessonStatus = function ( inputColumn ) {
    var range         = this.inputSheet.getRange( this.firstBodyRow, inputColumn, this.bodyRows, this.numColumns );
    var contentValues = range.getValues();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.U, this.bodyRows, this.numColumns )
    .setValues( contentValues );
  }
  
  /** --------------------------------------------------------------------------
  * Topic Title
  * Col V or 22
  */
  this.topicTitle = function ( inputColumn ) {
    var range         = this.inputSheet.getRange( this.firstBodyRow, inputColumn, this.bodyRows, this.numColumns );
    var contentValues = range.getValues();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.V, this.bodyRows, this.numColumns )
    .setValues( contentValues );
  }
  
  /** --------------------------------------------------------------------------
  * Topic Category
  * Col W or 23
  */
  this.topicCategory = function () {}
  
  /** --------------------------------------------------------------------------
  * Topic Tag
  * Col X or 24
  */
  this.topicTag = function () {}
  
  /** --------------------------------------------------------------------------
  * Topic Content
  * Col Y or 25
  */
  this.topicContent = function ( inputColumn ) {
    var range         = this.inputSheet.getRange( this.firstBodyRow, inputColumn, this.bodyRows, this.numColumns );
    var contentValues = range.getValues();
    var code = ''
    + '<!-- wp:core-embed/vimeo {"url":"https://vimeo.com/123456789","type":"video","providerNameSlug":"vimeo","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\n'
    + '<figure class="wp-block-embed-vimeo wp-block-embed is-type-video is-provider-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\n'
    + 'https://vimeo.com/123456789\n'
    + '</div></figure>\n'
    + '<!-- /wp:core-embed/vimeo -->';

    for each( var value in contentValues ) {
      value[0] = code.replace(/123456789/g, value[0] );
    }

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.Y, this.bodyRows, this.numColumns )
    .setValues( contentValues );
  }
  
  /** --------------------------------------------------------------------------
  * Topic Enable Video Progression
  * Col Z  or 26
  */
  this.topicEnableVideoProgression = function ( inputColumn ) {
    var lastRow = this.outputSheet.getLastRow();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.Z, 1, this.numColumns )
    .setFormula( '=ARRAYFORMULA(IF(Content!AD2:AD' + lastRow + ' = TRUE, "Y", "N"))' );
  }
  
  /** --------------------------------------------------------------------------
  * Topic Video Lesson URL
  * Col AA or 27
  */
  this.topicVideoLessonUrl = function ( inputColumn ) {}
  
  /** --------------------------------------------------------------------------
  * Topic Autostart Video
  * Col AB or 28
  */
  this.topicAutostartVideo = function ( inputColumn ) {
    var lastRow = this.outputSheet.getLastRow();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.AB, 1, this.numColumns )
    .setFormula( '=ARRAYFORMULA(IF(Content!AF2:AF' + lastRow + ' = TRUE, "Y", "N"))' );
  }
  
  /** --------------------------------------------------------------------------
  * Topic Show Video Control
  * Col AC or 29
  */
  this.topicShowVideoControl = function ( inputColumn ) {
    var lastRow = this.outputSheet.getLastRow();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.AC, 1, this.numColumns )
    .setFormula( '=ARRAYFORMULA(IF(Content!AG2:AG' + lastRow + ' = TRUE, "Y", "N"))' );
  }
  
  /** --------------------------------------------------------------------------
  * Topic When To Show
  * Col AD or 30
  */
  this.topicWhenToShow = function ( inputColumn ) {
    var range         = this.inputSheet.getRange( this.firstBodyRow, inputColumn, this.bodyRows, this.numColumns );
    var contentValues = range.getValues();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.AD, this.bodyRows, this.numColumns )
    .setValues( contentValues );
  }
  
  /** --------------------------------------------------------------------------
  * Topic Auto Complete Lesson
  * Col AE or 31
  */
  this.topicAutoCompleteLesson = function ( inputColumn ) {
    var lastRow = this.outputSheet.getLastRow();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.AE, 1, this.numColumns )
    .setFormula( '=ARRAYFORMULA(IF(Content!AI2:AI' + lastRow + ' = TRUE, "Y", "N"))' );
  }
  
  /** --------------------------------------------------------------------------
  * Topic Hide Complete Button
  * Col AF or 32
  */
  this.topicHideCompleteButton = function ( inputColumn ) {
    var lastRow = this.outputSheet.getLastRow();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.AF, 1, this.numColumns )
    .setFormula( '=ARRAYFORMULA(IF(Content!AF2:AF' + lastRow + ' = TRUE, "Y", "N"))' );
  }
  
  /** --------------------------------------------------------------------------
  * Lesson Allow Comment
  * Col AG or 33
  */
  this.topicAllowComment = function ( inputColumn ) {
    var lastRow = this.outputSheet.getLastRow();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.AG, 1, this.numColumns )
    .setFormula( '=ARRAYFORMULA(IF(Content!AJ2:AJ' + lastRow + ' = TRUE, "Y", "N"))' );
  }
  
  /** --------------------------------------------------------------------------
  * Topic Order
  * Col AH or 34
  */
  this.topicOrder = function ( inputColumn ) {
    var range         = this.inputSheet.getRange( this.firstBodyRow, inputColumn, this.bodyRows, this.numColumns );
    var contentValues = range.getValues();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.AH, this.bodyRows, this.numColumns )
    .setValues( contentValues );
  }
  
  /** --------------------------------------------------------------------------
  * Topic Featured Image
  * Col AI or 34
  */
  this.topicFeaturedImage = function () {}
  
  /** --------------------------------------------------------------------------
  * Topic Status
  * Col AJ or 35
  */
  this.topicStatus = function ( inputColumn ) {
    var range         = this.inputSheet.getRange( this.firstBodyRow, inputColumn, this.bodyRows, this.numColumns );
    var contentValues = range.getValues();

    this.outputSheet
    .getRange( this.firstBodyRow, this.col.AJ, this.bodyRows, this.numColumns )
    .setValues( contentValues );
  }
  
  // ===========================================================================
  
}
```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)
