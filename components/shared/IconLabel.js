/**
 * Provides a vertically-aligned icon with label
 */
export default function IconLabel({ Icon, label }) {
  return (
    <div className="d-flex align-items-center">
      <Icon />
      <span className="ml-1">{label}</span>
    </div>
  );
}
