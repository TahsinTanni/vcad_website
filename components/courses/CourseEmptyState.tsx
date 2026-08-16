export default function CourseEmptyState({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="col-span-1 flex flex-col items-center justify-center text-center gap-md rounded-xl border border-dashed border-outline-variant/40 bg-surface-container/40 py-xxl px-lg mb-xxl">
      <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center">
        <span className="material-symbols-outlined text-[32px] text-on-surface-variant">
          search_off
        </span>
      </div>
      <h3 className="font-card-title text-card-title text-on-surface">
        No courses match that filter yet
      </h3>
      <p className="font-body text-body text-on-surface-variant max-w-md">
        We&apos;re adding new programs to this school regularly. In the
        meantime, browse everything we currently offer.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-sm px-xl py-sm rounded-[34px] bg-gradient-to-r from-secondary-container to-secondary-container/80 text-on-secondary-container font-default-primary text-default-primary transition-all hover:scale-105 active:scale-95"
      >
        View all programs
      </button>
    </div>
  );
}