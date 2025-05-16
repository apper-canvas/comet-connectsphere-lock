import { getIcon } from '../../utils/iconUtils';

function StatCard({ title, value, icon, trend, description, loading = false }) {
  const Icon = getIcon(icon);
  const isTrendPositive = trend && trend.startsWith('+');
  
  return (
    <div className="card transition-transform hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
      {/* Decoration element */}
      <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-primary opacity-5"></div>
      
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-surface-600 dark:text-surface-300">{title}</h3>
          
          {loading ? (
            <div className="mt-2 animate-pulse">
              <div className="h-8 w-16 bg-surface-200 dark:bg-surface-700 rounded"></div>
              {description && <div className="mt-1 h-4 w-24 bg-surface-200 dark:bg-surface-700 rounded"></div>}
            </div>
          ) : (
            <>
              <div className="mt-2 flex items-end">
                <span className="text-3xl font-bold text-surface-800 dark:text-surface-100">{value}</span>
                {trend && (
                  <span className={`ml-2 text-sm font-medium ${isTrendPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {trend}
                  </span>
                )}
              </div>
              {description && (
                <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">{description}</p>
              )}
            </>
          )}
        </div>
        <div className="flex items-center justify-center bg-primary/10 rounded-lg p-2">
          {Icon && <Icon className="w-8 h-8 text-primary" />}
        {Icon && <Icon className="w-10 h-10 text-primary opacity-80" />}
      </div>
    </div>
  );
}

export default StatCard;