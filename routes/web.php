<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::view('/', 'welcome');
Route::view('/add-item', 'welcome');
Route::view('/edit/{id?}', 'welcome');
Route::view('/player/profile', 'welcome');
Route::view('/game', 'welcome');
Route::view('/history', 'welcome');

// Route::get('/{path?}', function () {
//     return view('welcome');
// });

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
