<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class CreatePeminjamanRequest extends FormRequest
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
            // 'user_id' => 'required|integer',
            'buku_id' => 'required|integer',
            'total' => 'integer',
            'maxtime' => 'required|numeric',
            'status' => ['required', Rule::in(['dibooking', 'sedang dipinjam', 'sudah dikembalikan', 'tidak dikembalikan', 'dibatalkan'])],
        ];
    }
}
