import tw from 'twin.macro';

export const container = tw.div`flex items-center justify-center h-screen bg-white`;

export const form = tw.form`max-w-4xl w-full p-8`;

export const Label = tw.label`text-sm mb-1 block text-gray-600`;

export const inputContainer = tw.div`mb-8`;

export const input = tw.input`w-full p-3 bg-transparent border-0 border-b-2 border-gray-300 outline-none focus:border-brand-primary`;

export const button = tw.button`w-full py-2 bg-white border border-gray-300 text-black rounded-full mt-4 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition duration-300 ease-in-out`;

export const error = tw.p`text-red-500 mt-2 text-sm`;