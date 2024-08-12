import "./App.css";
import axios from "axios";

export default function App() {
  const customerKey = process.env.DISCOGS_CONSUMER_KEY;
  const customerSecret = process.env.DISCOGS_CONSUMER_SECRET;

  const getDiscogsIdentity = axios.get(
    "https://api.discogs.com/oauth/request_token",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          `OAuth oauth_consumer_key="${customerKey}", oauth_nonce="nonce", oauth_signature="${customerSecret}", oauth_signature_method="PLAINTEXT", oauth_timestamp="current_timestamp"`
      },
    }
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>YO</p>
        <button onClick={getDiscogsIdentity}>Get Discogs Identity</button>
      </header>
    </div>
  );
}
