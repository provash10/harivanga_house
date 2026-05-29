"use client";

import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { TbShoppingCartHeart } from 'react-icons/tb';
import { useRouter, useSearchParams } from 'next/navigation';

const InputSearch = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        const value = e.target.search.value;

        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set("search", value);
        } else {
            params.delete("search");
        }

        router.push(`?${params.toString()}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-3 w-full"
        >
            <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-40 md:w-48 lg:w-56">
    <input
        name="search"
        type="text"
        placeholder="Search Mango"
        defaultValue={searchParams.get("search") || ""}
        className="w-full outline-none bg-transparent text-sm"
    />

    <button type="submit">
        <IoSearchSharp className="text-lg text-gray-400" />
    </button>
</div>

            <TbShoppingCartHeart className="text-3xl" />
        </form>
    );
};

export default InputSearch;