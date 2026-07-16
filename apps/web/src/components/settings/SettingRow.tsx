interface SettingRowProps {
    icon: React.ElementType;
    title: string;
    description: string;
    control: React.ReactNode;
}

export default function SettingRow({
    icon: Icon,
    title,
    description,
    control,
}: SettingRowProps) {
    return (
        <div className="flex items-center justify-between gap-6 rounded-3xl border border-white/8 bg-white/3 p-6">

            <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                    <Icon className="text-xl" />
                </div>

                <div>

                    <h3 className="font-semibold text-white">
                        {title}
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-zinc-400">
                        {description}
                    </p>

                </div>

            </div>

            {control}

        </div>
    );
}