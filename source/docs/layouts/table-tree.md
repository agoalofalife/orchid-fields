---
title: Table Tree
description: Table Tree is the extra component to organize tree table
extends: _layouts.documentation
section: content
locale: en
---

# Tree Table {#TreeTable}
This is an additional component that extends the capabilities of a regular table to build tree records.

This table does not limit you in levels, you can make as many levels as you want. 🙂

<img class="block m-auto" src="/assets/layouts/table-tree/tabltree-demonstration.gif" alt="table tree preview" />

> This table is rendered through the server, if you have more than 1000 rows, you will have to wait and see the beautiful preloader 😎

## User Example

There are two steps to follow, that is to describe the table and the data it will render.

### Facade

To write a table, you will need the `treeTable` method and `TDTree` columns, which repeat the standard Orchid functionality.

```php

use Orchid\Support\Facades\Layout;
use agoalofalife\Orchid\Layouts\TDTree;

 Layout::treeTable('subscriptions', [
                TDTree::make('date'),
                TDTree::make('subscribers'),
                TDTree::make('likes'),
        ], nameId: 'id'),
```

### Table class


```php
namespace App\Orchid\Layouts;

use Orchid\Screen\TD;
use Orchid\Screen\Layouts\Table;
use agoalofalife\Orchid\Layouts\TreeTable;
use agoalofalife\Orchid\Layouts\TDTree;

class PatientListLayout extends TreeTable
{
    // name of unique column which will show in the first column
    protected $nameId = 'id';


    /**
     * Data source.
     *
     * The name of the key to fetch it from the query.
     * The results of which will be elements of the table.
     *
     * @var string
     */
    protected $target = 'patients';

    /**
     * @return TD[]
     */
    protected function columns() : array
    {
        return [
              TDTree::make('name')->alignRight(),
              TDTree::make('created_at')->sort(),      
        ];
    }
}
``` 
Everything is very simple and corresponds to the standard Orchid documentation.


However, it's a little more complicated with data. 🤔

There are two main keys `id` and `parent`. 
Parent points to the parent data, or rather its id.
Id is a unique field, which is used to set parent.

> id is the `$nameId` property your class

**Example with data** 

```php
     'table1' => [
                new Repository([
                    'id' => 1,
                    'parent' => 1,
                    'date' => 'Oleg',
                    'subscribers' => '',
                    'likes' => '',
                ]),
                new Repository([
                    'id' => 2,
                    'parent' => 1,
                    'date' => '01.2024',
                    'subscribers' => '123412',
                    'likes' => '2343234',
                ]),
                new Repository([
                    'id' => 3,
                    'parent' => 2,
                    'date' => '01.01.2024',
                    'subscribers' => '23434234234',
                    'likes' => '1',
                ]),
                new Repository([
                    'id' => 5,
                    'date' => 'Ivan',
                    'subscribers' => '1634234',
                    'likes' => '23',
                ]),
    ]
```
Notice the two keys in the data are id and parent. They are very important for building a correct table structure. Parent points to the id of the parent, id is unique information about the current data block. What is important: the child data should go strictly in the sequence below the parent data, at the moment it works like this!

### Custom id

If you have another unique field, you can pass its name when creating the table, for example below instead of **id**, the unique field would be **uuid**

```php
  Layout::tableTree('table1', [
                TDTree::make('uuid'),
                TDTree::make('date'),
                TDTree::make('subscribers',),
                TDTree::make('likes'),
            ], 'uuid'),
```
