---
title: identify-msg
alias:
  - identify-msg
---

Description
===========

The `solanum.chat/identify-msg` capability causes the server to add a `message tag <https://ircv3.net/specs/extensions/message-tags>`_ to messages sent by a user who is currently identified to the services account that corresponds to the user's current nickname.

The tag MUST be named `solanum.chat/identified` and specifies no value.

The tag MUST be added by the ircd to all commands sent by a user (e.g. PRIVMSG, MODE, NOTICE, and all others) and numeric replies sent on behalf of the user.

Example
-------

Consider that I am identified to the `glguy` services account and I have also grouped the `glguy_` nickname to that account. These are the expected results from chatting with `friend` as `glguy`, `glguy_`, and `notme`.

::

    @solanum.chat/identified :glguy PRIVMSG friend :hi, friend.
    @solanum.chat/identified :glguy_ PRIVMSG friend :I'm using my alt.
    :notme PRIVMSG friend :This isn't my nickname.

Relationship to other extensions
================================

This extension works in tandem with `account-tag <https://ircv3.net/specs/extensions/account-tag>`_.
While `account-tag` always specifies the user's canonical services account name, `identify-msg` provides information about the user's current nickname.
