---
title: Install
description: Installing Orchid Extra Fields in your project
extends: _layouts.documentation
section: content
locale: en
---

# Install {#Install}

To install, you need to already have Orchid and the Laravel framework installed.

Next, two commands must be executed:

The first command installs you the source code repository itself.


```bash
composer require agoalofalife/orchid-fields
```

The second command copies the js files to the public folder.

```bash
 php artisan vendor:publish --tag=orchid-extra-fields
```
