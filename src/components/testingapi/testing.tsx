'use client';

function ButtonTest() {
  const data = {
    userName: 'Giullinha',
    nickname: 'Giullinha do Vila Amélia',
  };

  async function makeRequest() {
    const response = await fetch('/api/testing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log('Reponse no front:', responseData);
  }

  return (
    <div>
      <button
        className="m-2 border border-darkerGray bg-red-500 p-2"
        onClick={() => makeRequest()}
      >
        Test
      </button>
    </div>
  );
}

export default ButtonTest;
