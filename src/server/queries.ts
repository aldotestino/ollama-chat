'use server';

export async function getChats() {
  return [];
}

export async function getModels() {
  const result = await fetch('http://127.0.0.1:11434/api/tags');
  const data = await result.json();

  return data.models.reduce((acc: any, model: any) => {
    acc[model.details.family] = [...(acc[model.details.family] || []), model.name.split(':')[0]];
    return acc;
  }, {} as Record<string, string[]>) as Record<string, string[]>;
}