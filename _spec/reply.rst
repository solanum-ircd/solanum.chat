---
title: reply
alias:
  - reply
---

Description
===========

The ``solanum.chat/reply`` capability informs the server that you'd like to be in receipt of IRCv3's `reply message tag <https://ircv3.net/specs/client-tags/reply>`_, so that the server will not attempt to downgrade replies sent by other users when sending those replies on to you.

Example
-------

Consider the example of a user ``fred`` replying to user ``bob`` in a channel you're in, once you've requested this capability

::

    @msgid=QgAABclB :bob PRIVMSG #solanum :nice weather today!
    @+reply=QgAABclB;msgid=wfMKLH5M :fred PRIVMSG #solanum :for ducks!

and consider the example of the same, but you have not requested this capability

::

    :bob PRIVMSG #solanum :nice weather today!
    :fed PRIVMSG #solanum :bob: for ducks!
