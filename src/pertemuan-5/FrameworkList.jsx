import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="p-8">
      {frameworkData.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-lg font-bold text-gray-800">
            {item.name}
          </h2>

          <p className="text-gray-600">{item.description}</p>

          {/* Developer */}
          <p className="text-sm text-gray-700 mt-2">
            Developer: {item.details.developer}
          </p>

          {/* Official Website */}
          <a
            href={item.details.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm block mt-1"
          >
            Visit Website
          </a>

          {/* Tags */}
          <div className="flex gap-2 mt-3 flex-wrap">
            {item.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}