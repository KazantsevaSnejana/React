const fs = require('fs').promises;

async function getJSONData(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(Ошибка чтения файла ${filePath}:, err);
    return null;
  }
}

async function main() {
  const users = await getJSONData('users.json');
  const posts = await getJSONData('posts.json');

  if (!users || !posts) {
    console.error('Не удалось загрузить все данные.');
    return;
  }

  posts.forEach(post => {
    const user = users.find(u => u.id === post.userId);
    if (!user) {
      console.error(Не найден пользователь для postId ${post.id});
      return;
    }

    console.log(${user.name} (Email:${user.email}) написал:);
    console.log('Заголовок:', post.title);
    console.log('Текст:', post.body);
    console.log('---');
  });
}

main();