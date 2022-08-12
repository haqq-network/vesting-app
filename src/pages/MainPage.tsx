import React, { useCallback } from 'react';
import { useOnboarding } from '../OnboardingContainer';
import { Button } from '../components/Button';
import { Heading, Text } from '../components/Typography';
import { Container } from '../components/Layout';
import { useNavigate } from 'react-router-dom';

export function MainPage() {
  const { connectWallet, isConnected } = useOnboarding();
  const navigate = useNavigate();

  const handleGoToAccount = useCallback(() => {
    navigate('account');
  }, [navigate]);

  return (
    <section className="flex-1">
      <Container>
        <div className="py-20 mx-auto max-w-5xl">
          <div className="flex flex-col space-y-12">
            <Heading level={1}>
              The first <br />
              Shariah-compliant <br />
              digital money
            </Heading>

            <div>
              <Text color="light" className="leading-8 text-2xl">
                The currency of the Haqq ecosystem.
                <br />
                Serves The Muslim Community.
                <br />
                Promotes Islamic values.
              </Text>
            </div>

            <div>
              {isConnected ? (
                <Button onClick={handleGoToAccount} className="px-10">
                  Go to account
                </Button>
              ) : (
                <Button onClick={connectWallet} className="px-10">
                  Connect wallet
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
