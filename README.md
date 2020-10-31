# Solanum IRCd Website

## Authoring

There are currently three collections present, `_doc` for documentation, `_spec` for specifications and `_posts` for news. These will automatically get the right layout. FOr pages outside those folders, `layout: page` is probably what you want

Files are generally expected to be reStructuredText.

required front-matter: `title`



There is some additional front-matter that can be added to files, such as `author` for posts, and `alias` which can be a string or an array of strings that will be turned into 308 redirects to the page.
For example:

_spec/identify-msg.rst
```
---
title: identify-msg
alias:
  - identify-msg
---
```

Will create a redirect from https://solanum.chat/identify-msg to https://solanum.chat/spec/identify-msg
