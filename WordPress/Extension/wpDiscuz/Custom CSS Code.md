Place in the `Custom CSS Code` input field under Styles Tab.
```css
.comments-area{width:auto;}

/* Remove shadow on Avatars */
.comments-area #wpcomm .wc-comment-label,
.comments-area #wpcomm .avatar {
    box-shadow: none !important;
}

/* Button Hover */
.comments-area .wc_comm_submit:hover {
    background-color: #28566f !important;
}

/* Remove Separator */
.comments-area {
    margin-top:  0 !important;
    padding-top: 0 !important;
    border-top:  0 !important;
}

.comments-area .wpdiscuz-front-actions{
    padding-top:    0 !important;
    padding-bottom: 0 !important;
}

.comments-area #wpcomm .wc-thread-wrapper,
.comments-area .wpdiscuz_auth {
    padding:       0 !important;
    margin-top:    0 !important;
    margin-bottom: 0 !important;
}
```