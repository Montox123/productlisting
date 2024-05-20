export function fetchCount(amount = 1) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: amount }), 500);
    });
  }
  
  export async function fetchCountAndData() {
    const response = await fetch('http://localhost:8080');
    const data = await response.json();
    return { data };
  }
  