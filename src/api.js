async function request(path, options = null) {
  const url = `${import.meta.env.VITE_API_ENDPOINT}${path}`;
  const response = await fetch(url, options);
  return response.json();
}

export function getRaces() {
  return request("/races");
}

export function postRaces(races) {
  return request("/races", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(races),
  });
}

export function getPredict() {
  return request("/predict");
}

export function postPredict(predict) {
  return request("/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(predict),
  });
}

