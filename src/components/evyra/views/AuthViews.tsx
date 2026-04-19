import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return <div>Login</div>;
};
