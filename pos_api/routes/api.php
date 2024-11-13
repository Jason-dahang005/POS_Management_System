<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:api');

Route::controller(AuthController::class)->group(function () {
    Route::post('register', 'register');
    Route::post('login', 'login');
});

Route::group(['middleware' => ['api', 'role:admin', 'auth:api']], function () { 
    Route::controller(UserController::class)->group(function () {
        Route::get('admin/user', 'index');
    });

    Route::controller(AuthController::class)->group(function () {
        Route::post('admin/logout', 'logout');
    });

    Route::controller(CategoryController::class)->group(function () {
        Route::get('admin/display-categories', 'index');
        Route::post('admin/create-categories', 'store');
        Route::put('admin/update-categories/{category_id}', 'update');
    });

    Route::controller(ProductController::class)->group(function () {
        Route::get('admin/display-products', 'index');
        Route::post('admin/create-products', 'store');
        Route::put('admin/update-products/{product_id}', 'update');
    });
});

Route::group(['middleware' => ['api', 'role:user', 'auth:api']], function () {
    Route::controller(UserController::class)->group(function () {
        Route::get('user/user', 'index');
    });

    Route::controller(AuthController::class)->group(function () {
        Route::post('user/logout', 'logout');
    });

    Route::controller(OrderController::class)->group(function () {
        Route::get('user/display-orders', 'index');
        Route::post('user/create-orders', 'store');
    });
});