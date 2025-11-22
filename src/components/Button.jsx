import React from "react";

const varientClasses = {
    primary: 'bg-blue-600 text-white border hover:border-blue-600 hover:bg-blue-100 hover:text-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
}

const Button =({
    variant='primary',
    children,
    className = '',
    onclick,
    ...props
}) => {
    return (
        <div>
            <button className={`px-5 py-2 m-1 rounded-3xl font-semibold transition-colors
                ${varientClasses[variant] ?? varientClasses.primary} ${className}`}
                onClick={onclick} {...props}
            >
                {children}
            </button>
        </div>
    )
}

export default Button;