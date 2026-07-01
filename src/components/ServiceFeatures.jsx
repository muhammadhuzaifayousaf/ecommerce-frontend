import {
  Lock,
  MessageCircle,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: <Lock size={22} />,
    title: "Secure payment",
    text: "Have you ever finally just",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Customer support",
    text: "Have you ever finally just",
  },
  {
    icon: <Truck size={22} />,
    title: "Free delivery",
    text: "Have you ever finally just",
  },
];

export default function ServiceFeatures() {
  return (
    <div className="grid md:grid-cols-3 gap-6 my-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-white border rounded-lg p-4"
        >
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
            {feature.icon}
          </div>

          <div>
            <h3 className="font-semibold">
              {feature.title}
            </h3>

            <p className="text-sm text-gray-500">
              {feature.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}