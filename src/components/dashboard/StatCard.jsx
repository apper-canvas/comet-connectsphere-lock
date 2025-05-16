import { getIcon } from '../../utils/iconUtils';

function StatCard({ title, value, icon, trend, description }) {
  const Icon = getIcon(icon);
  const isTrendPositive = trend && trend.startsWith('+');
  
  return (
    <div className="card transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-surface-600">{title}</h3>
          <div className="mt-2 flex items-end">
            <span className="text-3xl font-bold">{value}</span>
            {trend && (
              <span className={`ml-2 text-sm ${isTrendPositive ? 'text-green-500' : 'text-red-500'}`}>
                {trend}
              </span>
            )}
          </div>
          {description && <p className="mt-1 text-sm text-surface-500">{description}</p>}
        </div>
        {Icon && <Icon className="w-10 h-10 text-primary opacity-80" />}
      </div>
    </div>
  );
}

export default StatCard;