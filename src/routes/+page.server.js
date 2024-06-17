import fetch from 'node-fetch';

export async function load() {
    const apiUrl = `https://api.github.com/users/MokhtarAkle/repos?sort=updated&per_page=50`;
    const fileUrl = `https://api.github.com/repos/MokhtarAkle/repos?sort=updated&per_page=50`
  const response = await fetch(apiUrl);
  let repos = await response.json();

  repos = repos.map((repo) => {
    return {
      ...repo,
      name: repo.name.replace(/-/g, ' ')
    };
  });
  return {
    body: repos
  };
}