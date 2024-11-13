<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\OrderDetail;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $order = Order::orderBy('created_at', 'desc')->paginate(10);

        return response()->json([
            'message' => 'list of orders',
            'data'  => $order
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
    public function store(StoreOrderRequest $request)
    {
        $validate = $request->validated();

        $order = new Order();
        $order->user_id = Auth::user()->id;
        $order->total_amount = $validate['total_amount'];
        $order->save();

        if($order){
            foreach($validate['od'] as $od){
                $orderDetail = new OrderDetail();
                $orderDetail->order_id = $order->id;
                $orderDetail->product_id = $od['product_id'];
                $orderDetail->quantity = $od['quantity'];
                $orderDetail->save();
            }
        }

        return response()->json([
            'message'   => 'purchase successful!',
            'data'      =>  $validate
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
