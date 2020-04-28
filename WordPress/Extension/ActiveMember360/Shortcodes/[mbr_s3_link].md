[TOC]

# Usage
This shortcode is designed to generate an Amazon S3 self-expiring link, based on information provided in the “Amazon S3 Links” option panel or override parameters in the shortcode itself.

This shortcode does **NOT** support conditional branching with **[ELSE_s3_link]**.
Shortcode nesting is **NOT** supported.

# Example
```css
[mbr_s3_link object='folder/file']
```
```css
[mbr_s3_link protocol='https' bucket='bucketname' object='folder/file']
```
```css
[mbr_s3_link s3key='myS3key' s3secret='myS3secret' bucket='bucketname' object='folder/file']
```
```css
[mbr_s3_link protocol='https' host='s3.amazonaws.com' object='folder/file' expire='240']
```
```html
<a href="[mbr_s3_link protocol='https' host='s3.amazonaws.com' object='folder/file' expire='240']">Your anchor text</a> (following normal HTML rules for links)
```

# Parameters
## s3key
- Your S3 Key, to override anything entered in the settings panel.
- **Default:** none/See Plugin Options => Amazon S3 Link.
- **Required:** no.

## s3secret
- Your S3 Secret, to override anything entered in the settings panel.
- **Default:** none/See Plugin Options => Amazon S3 Link.
- **Required:** no.

## protocol
- The protocol to be used in building the URL, either “http” or “https”. Use this parameter when creating download links `<a href>`. Leave it out when building link for video and audio players.
- **Default:** https.
- **Required:** no.

## host
- The Amazon host name where your file is located, if you want to override the information provided in the “Amazon S3 Links” options panel. In 99.99% of the cases, it will always be s3.amazonaws.com
- **Default:** none/See Plugin Options => Amazon S3 Link.
- **Required:** no.

## bucket
- The name of the bucket where the file is stored, if other than the one specified in  the options panel. The bucket name should not include any path information.
- **Default:** none/See Plugin Options => Amazon S3 Link..
- **Required:** no.

## object
- The file name for which a self-expiring link should be generated. If the file is located in a folder, specify the file path relative to the bucket.
- **Default:** none.
- **Required:** Yes.

## expire
- Specifies the number of seconds after which the generated link loses validity.
- **Default:** none/See Plugin Options => Amazon S3 Link.
- **Required:** no.