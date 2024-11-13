<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Policies\CategoryPolicy;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $category = Category::orderBy('created_at', 'desc')->paginate(10);

        return response()->json([
            'message'       =>  'list of categories',
            'data'          =>  $category
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        $validate = $request->validated();

        $category = new Category();
        $category->name = $validate['name'];
        $category->description = $validate['description'];
        $category->save();

        return response()->json([
            'message'   =>  'new category added successfully!',
            'data'      =>  $validate
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, $category_id)
    {
        $validate = $request->validated();

        $category = Category::find($category_id);
        $category->name = $validate['name'];
        $category->description = $validate['description'];
        $category->status = $validate['status'];
        $category->save();

        return response()->json([
            'message'   =>  'category updated successfully!',
            'data'      =>  $validate
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }
}
