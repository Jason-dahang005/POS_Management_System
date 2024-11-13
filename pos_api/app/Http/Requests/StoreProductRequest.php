<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'          =>  ['required', 'string', 'max:255', 'unique:products'],
            'category_id'   =>  ['required', 'integer', 'max:255'],
            'image'         =>  ['required', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'description'   =>  ['required', 'string'],
            'price'         =>  ['required', 'numeric'],
            'available'     =>  ['required', 'integer'],  
        ];
    }
}
