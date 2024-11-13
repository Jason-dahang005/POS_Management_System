<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product = Product::orderBy('created_at', 'desc')->paginate(10);

        return response()->json([
            'message'   =>  'lsit of products',
            'data'      =>  $product
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
    public function store(StoreProductRequest $request)
    {
        $validate = $request->validated();

        $img = $validate['image'];
        $imageName = time().'.'.$img->getClientOriginalExtension();
        $img->move(public_path('product_images'), $imageName);

        $product = new Product();
        $product->name = $validate['name'];
        $product->category_id = $validate['category_id'];
        $product->image =  $imageName;
        $product->price = $validate['price'];
        $product->available = $validate['available'];
        $product->description = $validate['description'];
        $product->save();

        return response()->json([
            'message'   =>  'new product added successfully!',
            'data'      =>  $validate
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, $product_id)
    {
        $validate = $request->validated();

        $img = $validate['image'];
        $imageName = time().'.'.$img->getClientOriginalExtension();
        $img->move(public_path('product_images'), $imageName);

        $product = Product::find($product_id);
        $product->name = $validate['name'];
        $product->category_id = $validate['category_id'];
        $product->image = $imageName;
        $product->description = $validate['description'];
        $product->price = $validate['price'];
        $product->status = $validate['status'];
        $product->available = $validate['available'];
        $product->save();

        return response()->json([
            'message'   =>'product updated successfully!',
            'data'  =>  $validate
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
