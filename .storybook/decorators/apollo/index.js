import { ApolloProvider } from "react-apollo";

export default (client, store) => story => (
  <ApolloProvider client={client}>{story()}</ApolloProvider>
);
