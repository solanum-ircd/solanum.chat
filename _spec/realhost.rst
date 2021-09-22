---
title: realhost
alias:
  - realhost
---

Description
===========

The ``solanum.chat/realhost`` capability causes the server to add `messages tags <https://ircv3.net/specs/extensions/message-tags>`_ to messages sent by a user showing that user's IP address and hostname, when visible.

The tag indicating IP address MUST be named ``solanum.chat/ip`` and specifies the IP address of the sender.

The tag indicating hostname address MUST be named ``solanum.chat/realhost`` and specifies the hostname of the sender.

Servers supporting this capability MAY be configured to restrict visibility of these tags.

When allowed, the tag is added to all commands sent by a user (e.g. PRIVMSG, MODE, NOTICE, and all others) and numeric replies sent on behalf of the user.

Example
-------

Consider the example of normal user ``friend`` and privileged user ``staffmember`` each receiving a message from ``glguy``::

    @solanum.chat/ip=2001:db8::1 :glguy!x@2001:db8::1 PRIVMSG friend :My IP doesn't resolve to a hostname.
    @solanum.chat/ip=2001:db8::1 :glguy!x@example.com PRIVMSG friend :Mine does.
    :glguy!x@user/glguy PRIVMSG friend :Unprivileged user doesn't see though spoof.

    @solanum.chat/ip=2001:db8::1;solanum.chat/realhost=example.com :glguy!x@user/glguy PRIVMSG staffmember :Privileged users might see through spoofs.

Solanum Implementation
======================

The ``solanum.chat/realhost`` tag requires the receiver to have the ``auspex:hostname`` privilege.

The ``solanum.chat/ip`` tag is not sent for senders with a configuration file IP spoof.

The ``solanum.chat/ip`` tag requires the receiver to have the ``auspex:hostname`` privilege when a sender has a dynamic IP spoof.
