async function fetchDataFromMultipleAPIs() {
    try {
        const [todoResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1')
        ]);

        if (!todoResponse.ok || !postResponse.ok) {
            throw new Error('One or more API requests failed');
        }

        const todoData = await todoResponse.json();
        const postData = await postResponse.json();

        const combinedData = {
            todo: todoData,
            post: postData
        };

        console.log(combinedData);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
fetchDataFromMultipleAPIs();
