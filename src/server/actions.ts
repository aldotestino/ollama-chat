'use server';

export async function createChat(formData: FormData) {
  console.log('Creating chat with model:', formData.get('model'));
}