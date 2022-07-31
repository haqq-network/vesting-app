import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Container, Page } from './components/Layout';
import { Text, Heading } from './components/Typography';

export function App() {
  return (
    <Page header={<Header />} footer={<Footer />}>
      <section className="bg-light-green flex-1">
        <Container className="py-20">
          <Heading level={2} className="mb-8 text-center">
            Welcome to vesting ui
          </Heading>

          <div className="flex flex-col space-y-6">
            <Text color="primary" bold block>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nisi tempora recusandae, rerum suscipit incidunt vero maxime illo
              dignissimos reprehenderit quia, assumenda culpa sint non excepturi
              deleniti doloribus quisquam quis! Id aliquam laboriosam corrupti
              temporibus ipsa asperiores voluptatibus! Magnam iure earum saepe
              excepturi a deserunt eius nesciunt quam? Enim eaque voluptates
              maxime ratione? Quia unde quibusdam ipsa debitis, ad nobis!
              Similique, ex sapiente, molestias ducimus sunt repellendus harum
              ullam omnis quam molestiae pariatur modi qui illo at perferendis
              maiores dolores, iusto ipsum? Exercitationem tempore distinctio
              ullam quis, mollitia magni neque!
            </Text>
            <Text block italic color="light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nisi tempora recusandae, rerum suscipit incidunt vero maxime illo
              dignissimos reprehenderit quia, assumenda culpa sint non excepturi
              deleniti doloribus quisquam quis! Id aliquam laboriosam corrupti
              temporibus ipsa asperiores voluptatibus! Magnam iure earum saepe
              excepturi a deserunt eius nesciunt quam? Enim eaque voluptates
              maxime ratione? Quia unde quibusdam ipsa debitis, ad nobis!
              Similique, ex sapiente, molestias ducimus sunt repellendus harum
              ullam omnis quam molestiae pariatur modi qui illo at perferendis
              maiores dolores, iusto ipsum? Exercitationem tempore distinctio
              ullam quis, mollitia magni neque!
            </Text>
            <Text block>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nisi tempora recusandae, rerum suscipit incidunt vero maxime illo
              dignissimos reprehenderit quia, assumenda culpa sint non excepturi
              deleniti doloribus quisquam quis! Id aliquam laboriosam corrupti
              temporibus ipsa asperiores voluptatibus! Magnam iure earum saepe
              excepturi a deserunt eius nesciunt quam? Enim eaque voluptates
              maxime ratione? Quia unde quibusdam ipsa debitis, ad nobis!
              Similique, ex sapiente, molestias ducimus sunt repellendus harum
              ullam omnis quam molestiae pariatur modi qui illo at perferendis
              maiores dolores, iusto ipsum? Exercitationem tempore distinctio
              ullam quis, mollitia magni neque!
            </Text>
          </div>
        </Container>
      </section>
    </Page>
  );
}
