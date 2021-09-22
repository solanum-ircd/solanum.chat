---
title: oper
alias:
  - oper
---

Description
===========

The ``solanum.chat/oper`` capability causes the server to add a `message tag <https://ircv3.net/specs/extensions/message-tags>`_ to messages sent by a user who is currently a network operator.

The tag MUST be named ``solanum.chat/oper``. The value of the tag, if specified, MUST identify the operator.

The tag MUST be added by the ircd to all commands sent by a user (e.g. PRIVMSG, MODE, NOTICE, and all others) and numeric replies sent on behalf of the user.

Servers supporting this capability MAY be configured to restrict visibility of the tag or its value.

Example
-------

Consider that I am identified to the ``glguy`` operator account while chatting with the ``glguy_`` nickname.
I will send messages to three users with different configured levels of visibility.

::

    @solanum.chat/oper=glguy :glguy_ PRIVMSG full_access_friend :it's me!
    @solanum.chat/oper :glguy_ PRIVMSG partial_access_friend :you can see I'm an oper
    :glguy_ PRIVMSG acquaintence :don't mind me

Solanum Implementation
======================

The ``solanum.chat/oper`` tag is not sent for operators with the ``oper:hidden`` privilege or on servers with the ``general { hide_opers = yes; }`` configuration setting unless the receiving operator has the ``auspex:oper`` privilege.

Operator account names are only shown to other operators. Normal clients will find the tag's value omitted.
