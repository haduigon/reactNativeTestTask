import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './LoginFormStyles';
import {FieldValues, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {createAccWithCrids, loginWithCrids} from '../../auth/firebase';

const schema = z.object({
  email: z.string().email('Check your email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

function LoginForm() {
  const {
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [showPass, setShowPass] = useState(true);

  function onSubmit(data: FieldValues, type: 'login' | 'create') {
    console.log(data, 'kuku');

    if (type === 'login') {
      loginWithCrids(data.email, data.password);
    }

    if (type === 'create') {
      createAccWithCrids(data.email, data.password);
    }
  }

  return (
    <>
      <View>
        <TextInput
          style={styles.input}
          placeholder="email@example.cococo"
          onChangeText={(text: string) => setValue('email', text)}
        />
        {errors.email && (
          <Text style={styles.emailError}>{errors.email.message as any}</Text>
        )}

        <View style={styles.showPassBox}>
          <TextInput
            style={styles.input}
            placeholder="email@example.cococo"
            onChangeText={(text: string) => setValue('password', text)}
            secureTextEntry={showPass}
          />
          <TouchableOpacity
            onPress={() => setShowPass(prevState => !prevState)}
            style={styles.smallButton}
            activeOpacity={0.7}>
            <Text style={styles.text}>See pass</Text>
          </TouchableOpacity>
        </View>

        {errors.password && (
          <Text style={styles.passwordError}>
            {errors.password.message as any}
          </Text>
        )}
        <TouchableOpacity
          onPress={handleSubmit(data => onSubmit(data, 'login'))}
          style={styles.button}
          activeOpacity={0.7}>
          <Text style={styles.text}>Login with crids</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit(data => onSubmit(data, 'create'))}
          style={styles.button}
          activeOpacity={0.7}>
          <Text style={styles.text}>Creacte your acc</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default LoginForm;
