---
title: Установка
description: Установка вам в проект Orchid Extra Fields
extends: _layouts.documentation
section: content
locale: ru
---

# Установка {#Installation}

Для установки вам необходимо уже иметь установленным Orchid и фреймворк Laravel.

Далее необходимо выполнить две команды:

Первая команда устанавливает вам сам репозиторий с исходным кодом.


```bash
composer require agoalofalife/orchid-fields
```

Вторая команда копирует файлы js в папку public.

```bash
 php artisan vendor:publish --provider="agoalofalife\\Orchid\\OrchidFieldsServiceProvider" 
```
