import "react-native-gesture-handler";
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {

  return (
    <Canvas style={{ flex: 1 }}>
      <Rect x={0} y={0} width={200} height={200}>

        <LinearGradient start={vec(0, 0)} end={vec(200, 200)} colors={['red', 'green']} />
      </Rect>
    </Canvas>
  );
}
